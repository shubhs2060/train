Get the third highest amount from the db

Solution -  One way to solve this is by using offset and limit

select estimated_total_loss from passoff.transaction order by estimated_total_loss desc offset 2 limit 1 - In here we are ordering the data by estimated_total_loss in desc and then just skipping first 2 records using offset and limiting to 1 to just get 1 record
