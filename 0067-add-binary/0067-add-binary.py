class Solution(object):
    def addBinary(self, a, b):
        # Calculating binary value using function
        sum = bin(int(a, 2) + int(b, 2))

        # Printing result
        return (sum[2:])