def tripSteps(n):
    global memo
    if n < 0:
        return 0
    elif n == 0:
        return 1
    else: 
        memo[n] = tripSteps(n-1) + tripSteps(n-2) + tripSteps(n-3)
    return memo[n]

def wrapper(func):
    global memo
    memo = {}
    return func

trip = wrapper(tripSteps)

print(tripSteps(8))