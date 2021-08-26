# Store input numbers
indanger = input('Weeks in danger: ')
neutral = input('Weeks neutral: ')
top = input('Weeks at top: ')
sb = input('Weeks as Star Baker: ')
weeksplayed = input('Weeks played: ')

# Add two numbers
score = ((.25*indanger)+(.5*neutral)+(.75*top)+sb)/weeksplayed

# Display the sum
print((((.25*indanger)+(.5*neutral)+(.75*top)+sb)/weeksplayed)*10)
