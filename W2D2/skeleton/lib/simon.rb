class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1 
    @game_over = false 
    @seq = [] 
  end

  def play
    if @game_over == false 
      take_turn
      play
    else 
      game_over_message
      reset_game
    end 
  end

  def take_turn
    show_sequence
    require_sequence
    @sequence_length += 1 
    if @game_over == false 
      round_success_message
    end 
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    gets = sequence_guess.chomp.split(" ")
    if sequence_guess != @seq
      @game_over = true 
    end 
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    "Great job, its getting harder now."
  end

  def game_over_message
    "Oh no! You missed one. GAME OVER"
  end

  def reset_game
    @sequence_length = 1 
    @game_over = false 
    @seq = [] 
  end

end
