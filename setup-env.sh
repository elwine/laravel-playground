# update repository info
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update

# install php8.2 and required extensions
sudo apt install -y php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-zip php8.2-curl php8.2-mysql

# install composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# install laravel installer
composer global require laravel/installer
export PATH="$PATH:/home/codespace/.config/composer/vendor/bin"

source ~/.bashrc