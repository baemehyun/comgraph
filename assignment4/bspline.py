from scipy.interpolate import BSpline


def B(knot, d, k, knots):
    if d == 1:
        if knots[k] <= knot <= knots[k+1]:
            return 1.0
        return 0.0
    if knots[k+d-1] == knots[k]:
        c1 = 0.0
    else:
        c1 = (knot - knots[k])/(knots[k+d-1] - knots[k]) * B(knot, d-1, k, knots)
        #   c1 = (knot - u[k])/(u[k+d] - u[k]) * B(knot, d-1, k, u)
        #   c1 = (x - t[i])/(t[i+k] - t[i]) * B(x, k-1, i, t)

    if knots[k+d] == knots[k+1]:
        c2 = 0.0
    else:
        c2 = (knots[k+d] - knot)/(knots[k+d] - knots[k+1]) * B(knot, d-1, k+1, knots)
        #   c2 = (u[k+d+1] - knot)/(u[k+d+1] - u[k+1]) * B(knot, d-1, k+1, u)
        #   c2 = (t[i+k+1] - x)/(t[i+k+1] - t[i+1]) * B(x, k-1, i+1, t)
    print('B1', 'c1', c1, 'c2', c2, 'd', d)

    return c1 + c2


def B2(knot, d, k, u):
    if d == 0:
        if u[k] <= knot <= u[k+1]:
            return 1.0
        else:
            return 0.0
    if u[k+d] == u[k]:
        c1 = 0.0
    else:
        c1 = (knot - u[k])/(u[k+d] - u[k]) * B2(knot, d-1, k, u)

        #   c1 = (knot - u[k])/(u[k+d] - u[k]) * B(knot, d-1, k, u)
    if u[k+d+1] == u[k+1]:
        c2 = 0.0
    else:
        c2 = (u[k+d+1] - knot)/(u[k+d+1] - u[k+1]) * B2(knot, d-1, k+1, u)
        #   c2 = (u[k+d+1] - knot)/(u[k+d+1] - u[k+1]) * B(knot, d-1, k+1, u)
    print('B2', 'c1', c1, 'c2', c2, 'd', d)
    return c1 + c2


def bspline(knot, u, c, degree_of_Bspline):
    # knot = n+d+1
    # degree_of_Bspline = degree_parameter-1
    degree_parameter = degree_of_Bspline+1
    n = len(u)-degree_of_Bspline-1
    print('bspline1', n)
    assert (n >= degree_parameter) and (degree_parameter >= 2)
    return sum(c[k] * B(knot, degree_parameter, k, u) for k in range(n))
    return sum(c[i] * B(x, k, i, t) for i in range(n))


def bsplineM(knot, u, c, degree_parameter):
    sum = 0
    n = len(u)-degree_parameter-1
    for k in range(n):
        sum += c[k]*B(knot, degree_parameter, k, u)
    return sum


def bspline2(x, t, c, k):
    # (knots)t =  n+k+1
    n = len(t) - k - 1
    # B-spline degree k =d-1
    assert (n >= k+1) and (len(c) >= n)
    return sum(c[j] * B2(x, k, j, t) for j in range(n))


def bspline3(knot, u, c, degree_parameter):
    # n = len(c)-1
    n = len(u)-degree_parameter-1
    print('bspline3', n)
    
    assert (len(c) >= degree_parameter) and (degree_parameter >= 2)
    return sum(c[k] * B2(knot, degree_parameter , k, u) for k in range(n))
    return sum(c[i] * B(x, k, i, t) for i in range(n))


def drawBspline():

    degree_parameter = 3
    # k = 2
    degree_of_Bspline = 2
    knots = [0, 1, 2, 3, 4, 5, 6] #knots
    c = [-1, 2, 0, -1]
    u = 2.5
    spl = BSpline(knots, c, degree_of_Bspline)
    print(spl(u))
    print('bs1', bspline(u, knots, c, degree_of_Bspline))
    # print('bs2', bspline2(knot, u, c, degree_parameter))
    print('bs3', bspline3(u, knots, c, degree_of_Bspline))
    # print('bsM', bsplineM(knot, u, c, degree_parameter))


drawBspline()
