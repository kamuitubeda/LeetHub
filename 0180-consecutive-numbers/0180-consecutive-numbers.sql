SELECT DISTINCT num AS ConsecutiveNums
FROM Logs l
WHERE num = (SELECT num FROM Logs l1 WHERE l1.id = l.id + 1 ) 
AND num = (SELECT num FROM Logs l2 WHERE l2.id = l.id + 2 );