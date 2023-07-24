N = int(input())   #N!

def d (N):
    if(N < 1):
        return 1
    return N * d(N-1)

print(d(N))
