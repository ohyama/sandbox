class User 

	@@count = 0

	def initialize(name)
		@name = name
		@@count += 1
	end
=begin
	def name
		@name
	end

	def setName(newName)
		@neme = newName
	end
=end
	attr_accessor :name

	def sayHi
		puts "hello, my name is #{@name}"
	end

	def User.sayHello
		puts "hello from User Class #{@@count} User"
	end

end

class SuperUser < User

	def shout
		puts "HELLO! from #{@name}!"
	end
end


t = Time.now

p t.year
p t.month


User.sayHello()
tom = User.new("Tom")
bob = SuperUser.new("Bob")

tom.sayHi()
bob.sayHi()
puts bob.name
tom.name = "hoge"
puts tom.name 
tom.sayHi()
bob.shout()
User.sayHello()
