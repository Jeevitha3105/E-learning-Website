document.addEventListener('DOMContentLoaded', function() {
const courses = [
    {
      name: "John Doe",
      subject: "Web designing",
      img: './images/courses/course-1.jpg',
      price: '$70',
      category : 'Designing'
    },
    {
      name: "Laura",
      subject: "UI/UX Designing",
      img: './images/courses/course-2.jpg',
      price: '$78',
      category : 'Designing'
    },
    {
      name: "Kenry",
      subject: "Block Chain",
      img: './images/courses/course-3.jpg',
      price: '$70',
      category : 'Technical'
    },
    {
      name: "Emily Smith",
      subject: "Digital Marketing",
      img: './images/courses/course-4.jpg',
      price: '$65',
      category : 'Business'
    },
    {
      name: "David Johnson",
      subject: "Data Science",
      img: './images/courses/course-5.jpg',
      price: '$75',
      category : 'Technical'
    },
    {
      name: "Sophia Brown",
      subject: "Mobile App Development",
      img: './images/courses/course-6.jpg',
      price: '$80',
      category : 'Technical'
    },
    {
      name: "Michael Clark",
      subject: "Artificial Intelligence",
      img: './images/courses/course-7.jpg',
      price: '$85',
      category : 'Technical'
    },
    {
      name: "Emma Wilson",
      subject: "Photography",
      img: './images/courses/course-8.jpg',
      price: '$60',
      category : 'Others'
    },
    {
      name: "Oliver Taylor",
      subject: "Cybersecurity",
      img: './images/courses/course-9.jpg',
      price: '$75',
      category : 'Technical'
    },
    {
      name: "Isabella Martinez",
      subject: "Business Management",
      img: './images/courses/course-10.jpg',
      price: '$70',
      category : 'Business'
    },
    {
      name: "Lucas White",
      subject: "Machine Learning",
      img: './images/courses/course-11.jpg',
      price: '$80',
      category : 'Technical'
    },
    {
      name: "Ava Rodriguez",
      subject: "Graphic Design",
      img: './images/courses/course-12.jpg',
      price: '$65',
      category : 'Designing'
    },
    {
      name: "Ethan Harris",
      subject: "Finance & Accounting",
      img: './images/courses/course-13.jpg',
      price: '$70',
      category : 'Business'
    },
    {
      name: "Mia Martinez",
      subject: "English Language",
      img: './images/courses/course-14.jpg',
      price: '$55',
      category : 'Others'
    },
    {
      name: "Sophie Taylor",
      subject: "Python Programming",
      img: './images/courses/course-15.jpg',
      price: '$65',
      category : 'Technical'
    },
    {
      name: "Jack Anderson",
      subject: "Game Development",
      img: './images/courses/course-16.jpg',
      price: '$75',
      category : 'Technical'
    }
  ];


  let container = document.querySelector('.pro-container');
  let filterButtons = document.querySelectorAll('.filter-btn');

  function displayAllItem(courses){
    courses.forEach((course)=>{
        let card = document.createElement('div');
        card.classList.add('pro');
        card.innerHTML = `
        <img src=${course.img} alt="" />
        <div class="des">
            <span>${course.name}</span>
            <h5>${course.subject}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${course.price}</h4>
        </div>
        <button class="cart">Enroll now</button>
    `
    container.appendChild(card);
      })
  }


  //filter

  function filterItems(category) {
    container.innerHTML = '';
    if (category === "All") {
      displayAllItem(courses);
    } else {
      const filteredItems = courses.filter(course => course.category === category);
      displayAllItem(filteredItems); 
    }
  }
  

  filterButtons.forEach(filter => {
    filter.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filter.classList.add('active');
      const courseCategory = filter.getAttribute('category');
      filterItems(courseCategory);
    });
  });



  
  displayAllItem(courses);

  
})
  