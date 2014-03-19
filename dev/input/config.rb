# Compass configuration

http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"

environment = :dev
output_style = (environment == :dev) ? :nested : :compressed
line_comments = (environment == :dev) ? true : false
relative_assets = true
