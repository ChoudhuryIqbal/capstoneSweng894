import React from 'react'
import AccountButtons from '../../../src/components/account/AccountButtons'
import { create } from 'react-test-renderer';

describe('AccountButtons correctly', () => {
    test('AccountButtons renders without crashing', () => {
        const button = create(<AccountButtons />);
        expect (button.toJSON()).toBeTruthy();
    })
  });