# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# INPUT: (Array(words), letter)
# OUTPUT: [Words containing the particular letter]

# We are going to need to arguments passed in, the array of words and also the letter to be filtered.
# We are going to have use a iteration method that will iterate through each word in the array.
# For this we are going to use the .select method that will iterate through the given array and we can pass in another method .include? to check to see if any of the words in the array contain the given letter.

# define the method, named it particular_word and pass in two arguments (array, letter)
def particular_word(array, letter);
    # From the array we are going to .select the word values of all the indexes of the array and with that word we use .include?(letter) to check to see if that word contains that letter.
    array.select { |word| word.include?(letter) }
    # Since Ruby has an implicit return, we don't need to return anything as the method .select will return an array automatically.
end

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

particular_word(beverages_array, letter_o)
# ["coffee", "soda water"]

particular_word(beverages_array, letter_t)
# ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# INPUT: hash: us_states
# OUTPUT: Array with no nested arrays, so remove nested arrays and combine the values and alphabetize them.

# So since we know what the idea is.. we have to first figure out how to remove the nested arrays.
# I browsed and there is a method called .flatten that 'flattens' out nested arrays and returns an array with all the values in just that array.
# After .flatten we can use .sort() which will automatically sort the values alphabetically. 

# I'll define the method alphabetgized_array and it takes in a hash.
def alphabetized_array(hash);
    # We have to specifically indicate we want to  flatten the values of the hash, and after the flatten method, can tag on the sort()
    hash.values.flatten.sort()
end

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

p alphabetized_array(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
