-- Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
-- Output: 7 -> 0 -> 8
-- Explanation: 342 + 465 = 807.

-- Input: (5) + (7)
-- Output: 2 -> 1
-- Explanation: 5 + 7 = 12.

accumulator :: [Int] -> [Int] -> Int -> [Int] -> [Int]
accumulator [] [] extra result = if extra > 0 then result ++ [extra] else result
accumulator (x:xs) (y:ys) extra result =
  let total = x + y + extra
      newExtra = if total > 9 then 1 else 0
      total' = if newExtra > 0 then (total - 10) else total
  in  accumulator xs ys (newExtra) (result ++ [total'])

addTwoNumbers :: [Int] -> [Int] -> [Int]
addTwoNumbers [] [] = []
addTwoNumbers listA listB = accumulator listA listB 0 []
