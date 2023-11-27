const indexList = ["Index_0", "Index_1", "Index_2"]
console.log(indexList[1]) // Console: Index_1

// Adding items to the list
    indexList.push("Index_3")
    indexList[4] = 123

// Removing items from the list
    indexList.shift() // removes the first item from the list
    indexList.pop() // removes the last item from the list

// List Lenght size
    indexList.length // returns the amount of items in the list

// FOR LOOP
    // for (variable ; condition ; increment/decrement)
    for (let index = 0; index < indexList.length; index++) {
        const indexElement = indexList[index]
    }

    // Example 01
    const name = "Fabio"

    for (let index = 0; index < name.length; index++) {
        const letter = name[index]
        console.log(letter)
    }

    // Example 02
    const grades = []

    grades.push(5)
    grades.push(4)
    grades.push(3)
    grades.push(2)
    grades.push(1)
    grades.push(0)

    let sum = 0

    for (let index = 0; index < grades.length; index++) {
        const grade = grades[index]
        sum = sum + grade
    }

    const gpa = sum / grades.length
    console.log(gpa)
