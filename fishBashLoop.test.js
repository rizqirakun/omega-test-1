const { fishBashLoop } = require('.');

it('should return "1, 2, fish"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    fishBashLoop(3);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy.mock.calls[0][0]).toEqual(1);
    expect(logSpy.mock.calls[1][0]).toEqual(2);
    expect(logSpy.mock.calls[2][0]).toEqual('fish');

    logSpy.mockRestore();
});


it('should return "1, 2, fish, 4, bash"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    fishBashLoop(5);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy.mock.calls[0][0]).toEqual(1);
    expect(logSpy.mock.calls[1][0]).toEqual(2);
    expect(logSpy.mock.calls[2][0]).toEqual('fish');
    expect(logSpy.mock.calls[3][0]).toEqual(4);
    expect(logSpy.mock.calls[4][0]).toEqual('bash');

    logSpy.mockRestore();
});

it('should return "1, 2, fish, 4, bash, ..., 14, fish bash"', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    fishBashLoop(15);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(15);
    expect(logSpy.mock.calls[0][0]).toEqual(1);
    expect(logSpy.mock.calls[1][0]).toEqual(2);
    expect(logSpy.mock.calls[2][0]).toEqual('fish');
    expect(logSpy.mock.calls[3][0]).toEqual(4);
    expect(logSpy.mock.calls[4][0]).toEqual('bash');
    expect(logSpy.mock.calls[5][0]).toEqual('fish');
    expect(logSpy.mock.calls[6][0]).toEqual(7);
    expect(logSpy.mock.calls[7][0]).toEqual(8);
    expect(logSpy.mock.calls[8][0]).toEqual('fish');
    expect(logSpy.mock.calls[9][0]).toEqual('bash');
    expect(logSpy.mock.calls[10][0]).toEqual(11);
    expect(logSpy.mock.calls[11][0]).toEqual('fish');
    expect(logSpy.mock.calls[12][0]).toEqual(13);
    expect(logSpy.mock.calls[13][0]).toEqual(14);
    expect(logSpy.mock.calls[14][0]).toEqual('fish bash');

    logSpy.mockRestore();
});

it('should return fish if can be divided by 3 only', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    // hide console
    logSpy.mockImplementation(() => { });
    fishBashLoop(100);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(100);
    expect(logSpy.mock.calls[2][0]).toEqual('fish');
    expect(logSpy.mock.calls[32][0]).toEqual('fish');
    expect(logSpy.mock.calls[68][0]).toEqual('fish');
    expect(logSpy.mock.calls[98][0]).toEqual('fish');

    logSpy.mockRestore();
});

it('should return bash if can be divided by 5 only', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    // hide console
    logSpy.mockImplementation(() => { });
    fishBashLoop(100);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(100);
    expect(logSpy.mock.calls[9][0]).toEqual('bash');
    expect(logSpy.mock.calls[39][0]).toEqual('bash');
    expect(logSpy.mock.calls[69][0]).toEqual('bash');
    expect(logSpy.mock.calls[99][0]).toEqual('bash');

    logSpy.mockRestore();
});

it('should return bash if can be divided by 3 and 5', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    // hide console
    logSpy.mockImplementation(() => { });
    fishBashLoop(100);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(100);
    expect(logSpy.mock.calls[14][0]).toEqual('fish bash');
    expect(logSpy.mock.calls[29][0]).toEqual('fish bash');
    expect(logSpy.mock.calls[74][0]).toEqual('fish bash');
    expect(logSpy.mock.calls[89][0]).toEqual('fish bash');

    logSpy.mockRestore();
});

it('should return error', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const action = fishBashLoop('afljfa');
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy.mock.calls[0][0]).toEqual('Parametes must be number');
    expect(action === null)
    logSpy.mockRestore();
});