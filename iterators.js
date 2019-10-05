const Courses = {
  topics: {
    webdevelopment: ['Modern Web Development', 'Angular', 'React', 'Vue.js'],
    androiddevelopment: ['Android Nanodegree by Udacity', 'Android Training'],
    machinelearning: [
      'Machine Learning A-Z',
      'Data Scientist Nanodegree by Udacity',
      'Data Analyst Nanodegree by Udacity'
    ]
  },
  [Symbol.iterator]() {
    let coursesByTopic = Object.values(this.topics);
    let courseIndex = 0;
    let topicIndex = 0;
    return {
      next() {
        if (courseIndex >= coursesByTopic[topicIndex].length) {
          topicIndex++;
          courseIndex = 0;
        }
        if (topicIndex >= coursesByTopic.length) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: coursesByTopic[topicIndex][courseIndex++],
          done: false
        };
      }
    };
  }
};

// Iterate over our courses iterable

for (let course of Courses) {
  // Note: for..of have a built in mechanism to consume iterables until the done value
  // evaluates to true
  console.log(course);
}

// What if we want to consume iterables without any loop

// Steps :

// 1. Get at  the iterator from the iterable (courses here)

let courseIterator = Courses[Symbol.iterator]();

// 2. Call next() manually each time
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());
console.log(courseIterator.next());

