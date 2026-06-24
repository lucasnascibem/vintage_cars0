# This is the main script for our application.
# It reads a file and prints its contents.

def read_file(filepath):
    with open(filepath, 'r') as file:
        return file.read()

if __name__ == "__main__":
    filepath = "example.txt"
    content = read_file(filepath)
    print(content)

