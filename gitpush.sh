
## Push code to git using pat
## Usage: gitpush.sh <commit message>
## Example: gitpush.sh "Initial commit"
#

git add .
git commit -m "$1"
git push 
echo "Code pushed to git successfully"

