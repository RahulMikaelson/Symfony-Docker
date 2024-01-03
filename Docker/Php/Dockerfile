FROM php:8.1-fpm-alpine


COPY php.ini /usr/local/etc/php/conf.d/
# Install the MongoDB extension dependencies
RUN apk add --no-cache  openssl-dev autoconf g++ make

# Install the MongoDB extension
RUN pecl install mongodb && docker-php-ext-enable mongodb



WORKDIR /srv
COPY --from=composer:2.5.8 /usr/bin/composer /usr/local/bin/composer