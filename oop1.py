class Animal(object):
	def __init__(self, sound, name, age, favorit_color):
		self.sound = sound
		self.name = name
		self.age = age
		self.favorit_color = favorit_color
	def eat(self, food):
		print("Yummy! " + self.name + " is eating " + food)

	def description(self):
		print(self.name + " is " + str(self.age) + " years old and loves the color " + self.favorit_color)

	def make_sound(self):
		print(lion.name + " is making 3 " + lion.sound + " every time")

lion = Animal("roar", "Lev", 23, "pink")
lion.eat("bananas")
lion.description()
lion.make_sound()

class Person():
	def __init__(self, name, age, city, gender):
		self.name = name
		self.age = age
		self.city = city
		self.gender = gender

	def Breakfast(self, food):
		print(Person1.name + " is eating his favorit breakfast: " + food)

	def TV(self, TV_show):
		print(Person1.name + " likes to watch the TV show " + TV_show)

Person1 = Person("noa", 58, "Jerusalem", "male")
Person1.Breakfast("eags")
Person1.TV("friends")

class Bird():
	def __init__(self, name, color, speed):
		self.name = name
		self.color = color
		self.speed = speed
	def getSpeed(self):
		print(bird1.name + "'s speed is " + bird1.speed)
		
	bird1 = Bird("Dora", "pink", 44)
	bird1.getSpeed()
	