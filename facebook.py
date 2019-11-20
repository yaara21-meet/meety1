class User():
	def __init__(self, name, email, password):
		self.name = name
		self.email = email
		self.password = password
		self.friends_list = []
		
	def add_friends(self, email):
		self.friends_list.append(email)
		print(self.name + " has added " + email + " as a frienf.")


	def remove_friends(self, email):
		self.friends_list.remove(email)
		print(self.name + " has removed " + email + " from his friends list.")

	def get_post(self):
		post3 = Post(text, self.email)
		post.append(post3)
		print(self.name + " has prsted: " + text)

	def get_userinfo(self):
		print("Name: " + self.name)
		print("Email: " + self.email)
		print("password: " + self.password)
		print("friends_list: " + str(self.friends_list))
		print("Posts: " + str(self.posts))


class Post(User):
	def __init__(self, text):

		self.comments = []
		self.likes = 0
		self.dislikes = 0

	def add_comment(self, email, text):
		self.comments.append(text)
		print(email + " has commented: " + text)

	def add_likes(self, email):
		self.likes += 1
		print(email + " liked your post")

	def add_dislikes(self, email):
		self.dislikes += 1
		print(email + " disliked your post")


user = []
post = []





user1 = User("Yaara", "yaarameridor@gmail.com", "password123")
user2 = User("Uri", "urihello@gmail.com", "somepassword123")

user1.add_friends("urihello@gmail.com")

post3.get_post("hello, im writing a post")




