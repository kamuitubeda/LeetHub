CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
# Return only 1 records, start on record N (OFFSET N-1)
  SET N = N-1;
  RETURN (
      SELECT DISTINCT(salary) FROM Employee order by salary DESC 
      LIMIT N, 1
  );
END