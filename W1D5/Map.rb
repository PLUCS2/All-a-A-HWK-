class Map 
    def initialize
        @map = []
    end 

    def set(key, value)
        @map.each {|ele| ele[-1] = value if ele[0]== key}
        @map << [key, value]
    end 

    def get(key)
    end 

    def delete(key)
        @map.each {|ele| }
    end 
end 