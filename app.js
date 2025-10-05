'use strict'
window.addEventListener('DOMContentLoaded', () => {
	let tasks = []
	let userId = 0
	let userTask
	let inputMenu

	do {
		inputMenu = +prompt(`1) Yangi vazifa qo'shish
2) Vazifalarni ko‘rish
3) Vazifani complete qilish
4) Vazifani o‘chirish
5) Dasturni to‘xtatish`)

		// Switch
		switch (inputMenu) {
			case 1:
				addTask()
				break
			case 2:
				showTasks()
				break
			case 3:
				markCompleted()
				break
			case 4:
				deleteTask()
				break
			case 5:
				alert('Dasturdan chiqdingiz')
				break
			default:
				alert("Iltimos to'g'ri raqam kiriting")
		}
	} while (inputMenu !== 5)

	// addTask
	function addTask() {
		userTask = prompt('Yangi vazifa kiriting')

		let getTask = {
			id: ++userId,
			title: userTask,
			complete: false,
		}

		tasks.push(getTask)
	}

	// showTask
	function showTasks() {
		if (tasks.length === 0) {
			alert("📋 Vazifalar ro'yxati: Xozircha yo'q")
		} else {
			let tasksList = ''
			tasks.forEach(task => {
				let status = task.complete ? '✅' : '❌'
				tasksList += `ID: ${task.id}, Title: ${task.title}, Completed: ${status}\n`
			})

			prompt(`📋Vazifalar ro'yxati: \n${tasksList}1) Orqaga qaytish`)
		}
	}

	// markCompleted
	function markCompleted() {
		const taskCompleted = +prompt('Vazifaning ID raqamini kiriting')
		const task = tasks.find(item => item.id === taskCompleted)

		if (task) {
			task.complete = true
			alert('Vazifa muvaffaqiyatli complete qilindi')
		} else {
			alert('Vazifaning ID raqami topilmadi')
		}
	}

	// deleteTask
	function deleteTask() {
		const taskDelete = +prompt('Vazifaning ID raqamini kiriting')

		let oldLength = tasks.length
		tasks = tasks.filter(item => item.id !== taskDelete)

		if (tasks.length < oldLength) {
			alert("Vazifa muvaffaqiyatli o'chirildi")
		} else {
			alert("Vazifa muvaffaqiyatsiz o'chirildi")
		}
	}
})
