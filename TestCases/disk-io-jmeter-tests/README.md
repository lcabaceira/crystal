--- Test Description ----

Many applications, such as Alfresco and Solr, record a series of events to file-based storage for later use.  This can be anything from logging
and auditing, through to keeping a transaction redo log in an event sourced design or its close relative CQRS.

Java has a number of means by which a file can be sequentially written to, or read back again.  This test explores some of these mechanisms to
understand their performance characteristics.  For the scope of this test we will be using pre-allocated files  to focus on performance.

Constantly extending a file imposes a significant performance overhead and adds jitter to an application resulting in highly variable latency.

"Why is a pre-allocated file better performance?"

On disk a file is made up from a series of blocks/pages containing the data. It's important to know that these blocks are contiguous to provide
fast sequential access.  On the other hand, meta-data must be allocated to describe this file on disk and saved within the file-system.

A typical large file will have a number of "indirect" blocks allocated to describe the chain of data-blocks containing the file contents that
make up part of this meta-data. The common database engines also preallocate the files it will require.

The IO Test

We run the tests with 2 file sizes.  One that is sufficiently large to test sequential access, but can easily fit in the file-system cache,
and another that is much larger so that the cache subsystem is forced to retire pages so that new ones can be loaded.

For these two cases we'll use 400MB and 8GB respectively.  We also loop over the files a number of times to show the pre and post warm-up
characteristics.

This test contains 4 means of writing and reading back files sequentially:

- RandomAccessFile using a vanilla byte[] of page size.
- Buffered FileInputStream and FileOutputStream.
- NIO FileChannel with ByteBuffer of page size.
- Memory mapping a file using NIO and direct MappedByteBuffer.


The results of this tests are recorded on a JSON format.


--- Test Configuration Parameters ----

This tests has the following configuration parameters

indexfilesystem.path   =  Path to the indexes filesystem to be tested

contentfilesystem.path =  Path to the ContentStore filesystem to be tested

resultsDirectory = Path where to store the result JSON

As a general conclusion,

There is a significant difference in performance for the different means of doing sequential file read and write IO from Java.   We've found the use of ByteBuffers and Channels to be the best optimised parts of the IO libraries, all very dependent on the filesystem, OS and Host. This is why this tests are very important for Alfresco Content Store and Indexes file system as they can provide a good overview on how is each fiesystem performing in comparison with others.

References :

  - http://mechanical-sympathy.blogspot.ch/2011/12/java-sequential-io-performance.html

