- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components give you the ability to create and maintain local state.  Class components also give you the ability to control lifecycle events such as how the component gets rerendered, through the use of lifecycle methods such as componentDidMount or componentDidUpdate.  Lifecycle methods also let you control when external side-effects such as event listeners get created or destroyed.


- [ ] Name three lifecycle methods and their purposes.

componentDidMount - Executes once after the component is mounted to the DOM and lets you run processes that should occur once in the lifecycle, such as API calls to load data for a component or creating event listeners.

componentDidUpdate - Executes each time the component is re-rendered and gives you the opportunity to dynamically change the content of the component.

componentWillUnmount - Executes once when the component is about to be destroyed, and gives you the opportunity to perform clean-up operations such as destroying event listeners that were created earlier in the lifecycle.


- [ ] What is the purpose of a custom hook?

The purpose of a custom hook, ultimately, is code-reusibility.  It is like any other helper function you might write which gets called multiple times in an application.  The only difference is that it includes the use of React's built-in hooks.  Even if a hook is only called once, you might still want to create a custom hook to help modularize your code and make it more understandable.


- [ ] Why is it important to test our apps?

They say that much more time is spent maintaining code than in initially creating it, so anything that helps with the maintenance of a code base is a good thing.  Automated testing gives us confidence that any updates we make to our code will not inadvertantly break something else.  Test-driven development helps us define what it is our code is supposed to do before we begin coding the app itself.

