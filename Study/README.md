# MongoDB Design Patterns

https://www.mongodb.com/blog/post/building-with-patterns-a-summary

## The Approximation Pattern

_When the accuracy of the data is not really necessary, Do not update every time, update once in a while. to reduce the load_

When expensive operations are required for maintaining
our data and the precision is not the highest priority, we can ease our platform by avoiding the expensive operations by maintaining approximate values in the application layer.

https://www.mongodb.com/blog/post/building-with-patterns-the-approximation-pattern

- Pros:
  - We get fewer writes operation to the database, and the performance improves.
  - The numbers we maintain are still statically valid and the user experience is not damaged
- Cons:
  - The exact numbers are not represented, and in specific cases it might damage the user experience.
  - The implementation of this design pattern is done in the application layer.

## The Attribute Pattern

When having a collection with similar documents, and we
want to allow searching based on a specific attributes the
documents share, instead of setting a separated index for
each one of the attributes we better placing them all
together packed in array and set the index for the attribute
that holds that array.

https://www.mongodb.com/blog/post/building-with-patterns-the-attribute-pattern

https://www.youtube.com/watch?v=9eYwrloeM7U

```json
{
"sku" : "889842247718",
"name" : "Surface Book 2 15 inch",
"type" : "Laptop 2 in 1" "screen_size" : "15 inch",
"processor" : "Core i7 8th gen. 4 cores",
"ram size" : 16
}
```

### **The naive approach**

**Create one index per attribute**

```json
.createIndex("rscreen_size" : 1})
.createIndex("rprocessor" : 1})
...
```

**Queries are straight forward**

```json
.find({"processor" : "Core i7"})
```

**Won't scale if there are multiple (n > 10) searchable fields**
Up to 64 indexes Indexes **ARE NOT CHEAP** Write performance severely affected when more than 20 indexes

### **The attribute pattern**

```json
{
  "sku": "889842247718",
  "name": "Surface Book 2 15 inch",
  "type": "Laptop 2 in 1",
  "attributes": [
    { "k": "screen_size", "v": "15 inch" },
    { "k": "processor", "v": "Core i7 8th gen" },
    { "k": "ram_size", "v": 16 }
  ]
}
```

**Requires to change the schema**
Fields will be modeled as an array of subdocuments
**Queries will be more complex**

```json
.find({ attributes: { "$elemMatch" : { "k" : "processor", "v" : "Core i7" }}})
```

**Only one compound index required**

```json
 .createIndex({"attributes.k": 1, "attributes.v": 1})
```

**Performance**
Write performance impact will be almost negligible (compared with the naive approach) Read performance can be slower or faster than the naive approach depending on the query shape and indexed fields

The effectiveness of this pattern is significant especially
when only a small set of the documents share those
attributes.

- Pros:
  - Thanks for using this patterns we get less indexes and the performance improves.
  - Thanks for using this pattern the queries become faster and the performance improves.

### The Bucket Pattern

_when we have a lot of data, (waze), instead of loading the DB, we will take the entire information package from all the devices and pack into one_

When having data coming as a stream, instead of storing
that data in separated small documents we better pack
these small documents into bigger ones.

### The Computed Pattern

_When there is a calculation of information and there is a recurrence, to facilitate the processor we will create an information table with the results_

When having the need in a repeatedly calculation of data in
our application, and when most of the interaction with the
database is for reading data (not writing) then we might
improve the performance by writing the result of the
repeated calculation to our database, and retrieve it when
needed.

### The Document Versioning

_That it is necessary to track a version of documents_

When each and every document doesn't have too many
revisions, there aren't too many documents to version, and
most of the queries require the most current version of the
document, it would be best having one collection for storing
the most up-to-date version of the document, and a
separated collection for storing the document revisions.
