class User 

	@@count = 0

	def initialize(name)
		@name = name
		@@count += 1
	end

	def sayHi
		puts "hello, my name is #{@name}"
	end

	def User.sayHello
		puts "hello from User Class #{@@count} User"
	end

end

User.sayHello()
tom = User.new("Tom")
bob = User.new("Bob")

tom.sayHi()
bob.sayHi()
User.sayHello()
