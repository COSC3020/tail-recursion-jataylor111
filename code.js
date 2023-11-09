function tailRecursiveFib(step, last = 0, current = 1) {
    if (step == 0) {
        return last;
    }
    if (step == 1) {
        return current;
    }

    return tailRecursiveFib(step - 1, current, last + current);
}
