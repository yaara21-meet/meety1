class User():
	def __init__(self, name, email, password):
		self.name = name
		self.email = email
		self.password = password
		self.friends_list = []
		self.posts = []

	def add_friends(self, email):
		self.friends_list.append(email)
		print(self.name + " has added " + email + " as a frienf.")


	def remove_friends(self, email):
		self.friends_list.remove(email)
		print(self.name + " has removed " + email + " from his friends list.")

	def post(self,text):
		self.posts.append(text)
		print(self.name + " has prsted " + text)

	def get_userinfo(self):
		print("Name: " + self.name)
		print("Email: " + self.email)
		print("password: " + self.password)
		print("friends_list: " + str(self.friends_list))
		print("Posts: " + str(self.posts))


class Prst(User):
	




user1 = User("Yaara", "yaarameridor@gmail.com", "password123")
user2 = User("Uri", "urihello@gmail.com", "somepassword123")

user1.add_friends("urihello@gmail.com")
user2.post("hello, my name is Uru and i am a  hucker")
user1.get_userinfo()

user1.remove_friends("urihello@gmail.com")