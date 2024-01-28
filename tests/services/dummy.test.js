import { execute } from "../../src/service/dummy-service";
import * as helperService from "../../src/service/helper-service";
jest.mock('../../src/service/helper-service')

test('result is true and you return learning js', ()=>{
    // 1. Prepare mocks and values --prepare
    helperService.helper.mockImplementation(()=> true);
    //2 .Execute the method to test  - Act
    const result = execute();
    //3. Assert

    expect(result).toBe("Learning Js");
})

test('result is false and you return learning react', ()=>{
    // 1. Prepare mocks and values --prepare
    helperService.helper.mockImplementation(()=> false);
    //2 .Execute the method to test  - Act
    const result = execute();
    //3. Assert

    expect(result).toBe("Learning React");
})

// test('result is true and you return learning js', ()=>{
//     const result = execute();
//     expect(result).toBe('Learning React');
// })