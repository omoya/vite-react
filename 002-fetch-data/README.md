# 002-fetch-data

Data fetching from an API is one of the most, if not the most, common operations you will do in React.

Here we use the built-in fetch function to retrieve data from a public API that generates user data each time it receives a request: https://randomuser.me/api/

Fetched data are used to update the state (the user name). Again you can see a different way to do things in class and functional components. The first does the retrieval within the ComponentDidMount life-cycle method. The functiona one implements the useEffect Hook for that purpose.

Two things to know about the useEffect hook:

1 - useEffect cannot be declared as an async function. Therefore a new function should be defined and invoked internally

```
useEffect(() => {
async function fetchData() {
const user = await fetch("https://randomuser.me/api/")
.then((response) => response.json())
.then((data) => {
setName(data.results[0].name.first);
});
}
fetchData();
}, []);
```

2 - The empty array defined in the last position of the useEffect is the dependencies array. Here it is empty because we only want the fetching to happen once. When the component is created, never again. Variables can be included in this array for more sophisticated behaviours, but that is another story and shall be told another time.

3 - Despite what I told in point 2 you may see that, running that project in dev mode, the useEffect happens twice. This is a known issue (or peculiarity) that happens when using the strict mode

```
<StrictMode>
<App />
</StrictMode>
```

Running this code in production would just fetch the data once, when the component is mounted. So, better blink an eye and don´t pay too much attention to this.
