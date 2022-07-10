# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

puts "Please enter a number:"
 input = Integer(gets.chomp)
 if input % 2 == 0
 puts "is even"
 else
 puts "is odd"
 end

#-->Results 
#Please enter a number
#221 is odd, 42 is even, 7 is odd.


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowel(str)
    vowels = %w[a e i o u]
    str.each_char.to_a.reject{ |item| vowels.include?(item) }.join
  end

  p no_vowel(album1)
  p no_vowel(album2)
  p no_vowel(album3)

#  -->return
#"Rbbr Sl"
#"Sgt Pppr"
#"Abby Rd"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome?(string)
    if string == string.reverse
      return 'is a palindrome'
    else
      puts 'is not a palindrome'
    end
 end
p palindrome?(palindrome_tester1)
p palindrome?(palindrome_tester2)
p palindrome?(palindrome_tester3)

#-->Return
#is not a palindrome
#nil
#is not a palindrome
#nil
##is not a palindrome
#nil

