async function  async_one() {
    return "one";
}

async function async_two() {
    return "two";
}

//async_one().then(response => console.log(response));
// async_two().catch(error => console.log(error));


async function async_three() {
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
    // await useful for Promises()
}

// Multiple results :: Runs concurrently
async function async_four() {
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_two()]
    )
    console.log(res_one, res_two);
}

async_four();