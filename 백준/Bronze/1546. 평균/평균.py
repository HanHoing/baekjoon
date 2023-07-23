A = int(input())   #과목 개수
B = list(map(int,input().split()))
M = max(B)
C = []

for i in B :
    C.append(i/M*100)
print(sum(C)/A)
