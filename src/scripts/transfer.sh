
#!/bin/bash

if [ "$1" == "test" ]; then
    USER="ubuntu"
    SERVER_ADDRESS="ec2-3-7-72-9.ap-south-1.compute.amazonaws.com"
    RSYNC_PRIVATE_KEY="-e ssh -i ~/projects/web/airtable-maps/keys/aws-test-server.pem"
    PRIVATE_KEY="~/projects/web/airtable-maps/keys/aws-test-server.pem"
else

    echo "Please provide a valid argument"
    # USER="root"
    # SERVER_ADDRESS="5.161.52.123"
    # RSYNC_PRIVATE_KEY="-e ssh -i ~/projects/web/airtable-maps/keys/hetzner"
    # PRIVATE_KEY="~/projects/web/airtable-maps/keys/hetzner"
fi

SOURCE_DIR="dist"
IMG_DIR="root@5.161.52.123:/var/www/data/images/"
EXCLUDE_FILE="--exclude node_modules --exclude .git --exclude images "
DESTINATION_DIR="~/"

# transfer the files to the remote machine
rsync -avz $EXCLUDE_FILE "$RSYNC_PRIVATE_KEY" $SOURCE_DIR $USER@$SERVER_ADDRESS:$DESTINATION_DIR

# reconfigure and restart the server on the remote machine
ssh -i $PRIVATE_KEY $USER@$SERVER_ADDRESS <<EOF
    sudo mv dist /var/www/arcade-vr
    sudo service nginx reload
EOF

# transfer back foldeer called images
# rsync -avz "$RSYNC_PRIVATE_KEY" $DESTINATION_DIR/images $SOURCE_DIR
