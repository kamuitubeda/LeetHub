class Solution(object):
    def isValid(self, s):
        stack = []
        
        for item in (s):
            if item == '{' or item == '[' or item == '(':
                stack.append(item)
            elif(len(stack)):
                el = stack.pop()
                if item == ')' and el != '(': 
                    return False
                elif item == '}' and el != '{':
                    return False
                elif item == ']' and el != '[':
                    return False
            else:
                return False
        
        if(len(stack)):
            return False
        
        return True
        