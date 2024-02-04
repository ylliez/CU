
# Get maximum and current brightness from `/sys` which is provided by
# the kernel
@max_brightness = `cat /sys/class/backlight/gmux_backlight/max_brightness`.to_i
@brightness = `cat /sys/class/backlight/gmux_backlight/brightness`.to_i

def brighter
  @brightness = (@brightness * 1.1).to_i

  # Failsafe
  @brightness = @max_brightness if(@brightness > @max_brightness)

  # Start with a little light
  @brightness = 50 if (@brightness < 50)
end

def darker
  @brightness = (@brightness * 0.9).to_i
  @brightness = 0 if (@brightness < 40)
end

# Note: This needs passwordless sudo privileges
def set_brightness
  `echo #{@brightness} | sudo tee /sys/class/backlight/gmux_backlight/brightness`
  puts @brightness
end

def get_status
  puts "💡 #{(100 * @brightness / 1023.0).to_i}%"
end

case ARGV[0]