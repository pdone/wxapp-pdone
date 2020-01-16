Page({
    data: {
        number: '3348901250153',
        options: {
            number: true,
            prefix: true,
            // color: 'black',
            // debug: false,
            onValid() { console.log('onValid') },
            onInvalid() { console.log('onInvalid') },
            onSuccess() { console.log('onSuccess') },
            onError() { console.log('onError') },
        }
    },
    onLoad() { },
    bindinput(e) {
        this.setData({
            number: e.detail.value,
        })
    },
})