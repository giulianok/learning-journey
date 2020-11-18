reverseLinkedList :: [Int] -> [Int]
reverseLinkedList [] = []
reverseLinkedList (x:xs) = (reverseLinkedList xs) ++ [x]