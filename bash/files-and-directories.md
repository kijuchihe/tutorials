# Files and directories

## Making directories

```sh
mkdir -p directoryName
# The -p flag will allow the folder to be created even if the folder already exists
```

## Checking if directory exists

```sh
echo "Enter directory name to check"
read directoryName

if [ -d "$directoryName" ] # Notice how we checked if the directory exists
then
    echo "$directoryName exits"
```

## Creating files

```sh
echo "Enter a file name to create"
read fileName

touch $fileName
```

## Checking if file exists

```sh
echo "Enter directory name to check"
read fileName

if [ -f "$fileName" ] # Notice how we checked if the directory exists
then
    echo "$fileName exits"
```

## Reading file

```sh
echo "Enter directory name to check"
read fileName

if [ -f "$fileName" ]
then
    while IFS= read -r line # IFS is used for dealing with white spaces
    do
        echo "$line"
    done < $fileName
else
    echo "No file found"
fi
```

## Deleting file

```sh
echo "Enter directory name to check"
read fileName

if [ -f "$fileName" ]
then
    rm $fileName
    echo "File deleted"
else
    echo "No file found"
fi
```
