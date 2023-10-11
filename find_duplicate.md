Get all the duplicate records from the table using a key


SELECT trace_id,count(trace_id) FROM passoff.transaction group by trace_id  having count(trace_id) > 1

here the key for which we have to find duplicate we are doing a group by that key and getting and getting the count of the key and then we add a having condition to print all rows whose count is greater than 1 to get duplicate rows
