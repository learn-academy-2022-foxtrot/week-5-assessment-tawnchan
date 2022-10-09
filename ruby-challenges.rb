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
# I browsed and there is a method called .flatten that 'flattens' out nested arrays and returns an array with all the values in just that array. Basically it removes the square brackets and comebines the values into one.
# After .flatten we can use .sort() which will automatically sort the values alphabetically. 

# I'll define the method alphabetgized_array and it takes in a hash.
def alphabetized_array(hash);
    # We have to specifically indicate we want to  flatten the values of the hash, and after the flatten method, can tag on the sort() method to alphabetize the output array.
    hash.values.flatten.sort()
end

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

p alphabetized_array(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Okay... so if I am understanding this challenge correctly..
# It it asking me to make a class called Bike that initializes new instances of itself with 3 specific variables: model, wheels: 2, and current speed = 0 mph.

# First we will declare the new class of Bike, which is like a blue print for stamping out objects.
class Bike
    #anNndDd theNnn... we set the shared variables for the data we want to collect/create for each of the instances of this Bike class.
    def initialize(model, wheels = 2, current_speed = 0)
      #We'll tie all their attributes up with @ so we can call upon them 
      @model = model
      @wheels = wheels
      @current_speed = current_speed
    end
    # It then asks me to create a method called 'bike_info' that returns a sentence with all the data we initially called for a new object.
    # We'll name the method 'get_info'.
    def get_info
        # since we've already got the attributes/info tied up top and ready. we can just drop them into a sentence as an output. 
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

# Here we'll create a new instance/object out of the model class we just created up top...
# We'll call it trek_bike because we're smart like that. and set the Bike to .new and pass in the its name as the first and only rgument 'Trek bike' because that is all we need. 
trek_bike = Bike.new('Trek bike')
# lets call upon the method we built inside the new instance/object of the bike.
p trek_bike.get_info
# Output: "The Trek bike has 2 wheels and is going 0 mph."
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# Just to see what would happenm I played around by adding random values onto the new bike.
# new_model = Bike.new('Trek bike', 0, 4)
# "The Trek bike has 0 wheels and is going 4 mph."
# Obviously this bike is flying... 


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
