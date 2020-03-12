 def merge(self, nums1, m, nums2, n):
        placed = 0
        nums1Copy = nums1[0:m]
        mCopy = m*1
        nCopy = n*1
        while (m > 0 or n > 0):
            if m == 0:
                nums1[placed] = nums2[nCopy-n]
                n -= 1
            elif n == 0:
                nums1[placed] = nums1Copy[mCopy - m]
                m -= 1
            elif (nums1Copy[mCopy-m] < nums2[nCopy-n]):
                nums1[placed] = nums1Copy[mCopy-m]
                m -= 1
            else:
                nums1[placed] = nums2[nCopy-n]
                n -= 1
            placed += 1
        return nums1

# merges array 2 into 1, while 1 is modifed anda new one isnt created