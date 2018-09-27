var hasError = false;

        function asyncTask() {
            var promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Async calling callback!');
                    if (hasError) {
                        reject('Task Failed');
                    }
                    else {
                        resolve('Task Success');
                    }
                })
            });
            return promise;
        }

        asyncTask().then(
            (success) => console.log(success),
            (error) => console.log(error)
        );
