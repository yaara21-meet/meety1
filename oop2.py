from turtle import Turtle

class Ball(Turtle):
	def __init__(self, r, color, dx, dy):
		Turtle.__init__(self)
		self.penup()
		self.r = r
		self.dx = dx
		self.dy = dy
		self.shape("circle")
		self.color(color)
		self.shapesize(r/10)

	def move(self, screen_width, screen_height):
		current_x = self.xcor()
		new_x =  current_x + self.dx

		current_y = self.ycor()
		new_y =  current_y + self.dy

		right_side_ball = new_x + self.r
		left_side_ball = new_x - self.r
		top_side_ball = new_y + self.r
		bottom_side_ball = new_y - self.r

		self.goto(new_x, new_y)

		if right_side_ball > screen_width:
			self.dx = -self.dx

		if left_side_ball < screen_width:
			self.dx = -self.dx

		if top_side_ball > screen_height:
			self.dy = -self.dy

		if bottom_side_ball < screen_height:
			self.dy = -self.dy

ball = Ball(15, "red", 4, 4)
ball.move(2000,700)