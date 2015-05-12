class User 

	def initialize(name)
		@name = name
	end

	def sayHi
		puts "hello, my name is #{@name}"
	end
end

tom = User.new("Tom")
bob = User.new("Bob")

tom.sayHi()
bob.sayHi()


