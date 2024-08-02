# check_website.sh
URL=$1
RESPONSE=$(curl -o /dev/null -s -w "%{http_code}\n" $URL)
echo $RESPONSE
