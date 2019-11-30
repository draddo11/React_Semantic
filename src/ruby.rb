class Person
    attr_accessor :name, :age, :outfit
end 

person_1 =Person.new
person_1.name = 'Mike'
person_1.age =24
person_1.outfit= [" white shirt" , "red shorts", "white socks"]

person_2 = Person.new
person_2.name= "Emma"
person_2.age= 26
person_2.outfit= ["blue shirt " , "black skirt " , "black shoes"]

class Person 
    attr_accessor :name, :age, :outfit
    def say_hello
        puts @name + "says hello"
        #output the person's name + text "say hello"
    end
end

grettings =" Welcome back #{person_1.name}, Have a great day!"