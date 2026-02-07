str = str()
print(str)

# s1 = input("Enter first string: ")
# s2 = input("Enter second string: ")
# if s1 % 2 == 0:
#     print("First string has even length.")
# else:
#     print("First string has Odd length.")

s = "string"
print(s[2])
print(s[-2])
print(s[0:3])

text = "This is Text"
if "is" not in text:
    print("is not present")
else:
    print("is present")

anotherText = "   Fruits   is blah blah    "
x = anotherText.strip()
print(x)

y = anotherText.lstrip()
print(y)

z = anotherText.rstrip()
print(z)


try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Error: Invalid input. Please enter an integer.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")



try:
    number = int(input("Enter a number: "))
    result = 10 / number
except (ValueError, ZeroDivisionError):
    print("Error: Invalid input or division by zero.")
else:
    print(f"Result is: {result}")


try:
    number = int(input("Enter a number: "))
    result = 10 / number
except (ValueError, ZeroDivisionError):
    print("Error: Invalid input or division by zero.")
else:
    print(f"Result is: {result}")
finally:
    print("Execution completed.")
